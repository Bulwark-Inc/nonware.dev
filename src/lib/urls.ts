const BASE_URL = "https://nonware.shilohe-write.workers.dev";

export function getSiteUrl() {
  return BASE_URL;
}

export function getLearnUrl() {
  return `${BASE_URL}/learn`;
}

export function getTutorialUrl(tutorialSlug: string) {
  return `${BASE_URL}/learn/${tutorialSlug}`;
}

export function getLessonUrl(
  tutorialSlug: string,
  lessonSlug: string
) {
  return `${BASE_URL}/learn/${tutorialSlug}/${lessonSlug}`;
}