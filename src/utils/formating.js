export const formatDate = (date) => {
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

// Convert Markdown content into paragraphs and headings
export const parseContent = (content = "") => {
  return content
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      if (line.startsWith("## ")) {
        return {
          type: "heading",
          text: line.replace("## ", "").trim(),
        };
      }

      return {
        type: "paragraph",
        text: line.trim(),
      };
    });
};