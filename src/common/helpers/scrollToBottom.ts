export function scrollToBottom() {
  const element = document.getElementById('scrollable');
  if(element) {
    element.scrollTop = element?.scrollHeight;
  }
}