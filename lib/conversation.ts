export const CONVERSATION_ID = "conversation";
export const contactConversationHref = `/contact#${CONVERSATION_ID}`;

export function scrollToConversation() {
  const section = document.getElementById(CONVERSATION_ID);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    document.getElementById("contact-name")?.focus();
  }, 450);
}

export function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
