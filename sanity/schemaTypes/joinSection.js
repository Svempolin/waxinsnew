export default {
  name: "joinSection",
  title: "Join Section",
  type: "document",
  fields: [
    {
      name: "joinUsTitle",
      title: "Section Title",
      type: "string",
      description: "The main title for the Join Us section.",
    },
    {
      name: "jobItems",
      title: "Job Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "jobItem" }] }],
      description: "List of job items (e.g., Kitchen, Front House, Trainee) for this section.",
    },
  ],
};
