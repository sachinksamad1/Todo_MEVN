<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Todo } from "./types";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "./api";

const todos = ref<Todo[]>([]);
const title = ref("");
const loading = ref(false);
const error = ref("");

async function load() {
  loading.value = true;
  error.value = "";
  try {
    todos.value = await getTodos();
  } catch (e: any) {
    error.value = e?.message ?? "Failed to load todos";
  } finally {
    loading.value = false;
  }
}

async function createTodo() {
  const t = title.value.trim();
  if (!t) return;
  try {
    const newTodo = await addTodo(t);
    todos.value.unshift(newTodo);
    title.value = "";
  } catch (e: any) {
    error.value = e?.message ?? "Failed to add";
  }
}

async function toggle(id: string) {
  try {
    const updated = await toggleTodo(id);
    const idx = todos.value.findIndex(t => t._id === id);
    if (idx !== -1) todos.value[idx] = updated;
  } catch (e: any) {
    error.value = e?.message ?? "Failed to toggle";
  }
}

async function remove(id: string) {
  try {
    await deleteTodo(id);
    todos.value = todos.value.filter(t => t._id !== id);
  } catch (e: any) {
    error.value = e?.message ?? "Failed to delete";
  }
}

onMounted(load);
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="mx-auto max-w-xl">
      <h1 class="text-3xl font-bold mb-4">MEVN Todo</h1>

      <div class="bg-white rounded-lg shadow p-4 mb-4">
        <form @submit.prevent="createTodo" class="flex gap-2">
          <input
            v-model="title"
            type="text"
            placeholder="Add a new task..."
            class="flex-1 rounded border px-3 py-2 focus:outline-none focus:ring"
          />
          <button
            type="submit"
            class="rounded px-4 py-2 border bg-gray-900 text-white hover:opacity-90"
          >
            Add
          </button>
        </form>
        <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
      </div>

      <div class="bg-white rounded-lg shadow divide-y">
        <div v-if="loading" class="p-4">Loading...</div>
        <div v-else-if="!todos.length" class="p-4 text-gray-500">
          No todos yet. Add your first task!
        </div>
        <template v-else>
          <div v-for="t in todos" :key="t._id" class="p-4 flex items-center justify-between">
            <label class="flex items-center gap-3">
              <input type="checkbox" :checked="t.completed" @change="toggle(t._id)" />
              <span :class="t.completed ? 'line-through text-gray-500' : ''">{{ t.title }}</span>
            </label>
            <button
              class="text-sm px-3 py-1 border rounded hover:bg-gray-50"
              @click="remove(t._id)"
              aria-label="Delete todo"
              title="Delete"
            >
              Delete
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
