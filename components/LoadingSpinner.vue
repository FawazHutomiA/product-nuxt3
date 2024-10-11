<template>
  <div class="spinner">
    <div class="dot-container">
      <div class="dot" v-for="dot in 5" :key="dot"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3498db;
  animation: wave 1.2s ease-in-out infinite;
}

/* Animation for each dot */
@keyframes wave {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
}

/* Delay for each dot to create the wave effect */
.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
}
.dot:nth-child(4) {
  animation-delay: 0.6s;
}
.dot:nth-child(5) {
  animation-delay: 0.8s;
}
</style>
