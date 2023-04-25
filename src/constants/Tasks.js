export default {
  gatherData: task("Gathering Data", 100, "info"),
  expandCore: {
    title: "Expanding Core",
    work: 20,
    color: "info",
  },
};

function task(name, work, color) {
  return {
    name,
    work,
    color,
  };
}
