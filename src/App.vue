<template>
  <!-- 상단 네비게이션 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ReceiPie</a>
    </div>
  </nav>

  <!-- 페이지 본문 -->
  <main class="container my-4">
    <router-view />
  </main>

  <!-- 하단 푸터 -->
  <footer class="text-center text-muted py-3 border-top mt-5">
    &copy; 2025 ReceiPie. All rights reserved.
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
