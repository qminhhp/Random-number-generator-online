// Helper function to format strings with placeholders
export function formatString(str: string, ...args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== "undefined" ? args[index] : match;
  });
}
