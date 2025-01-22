export default {
  name: "jobItem",
  title: "Job Item",
  type: "document",
  fields: [
    {
      name: "jobItemTitle",
      title: "Job Title",
      type: "string",
      description: "The title of the job position (e.g., Kitchen, Front House, Trainee).",
    },
    {
      name: "jobDescription",
      title: "Job Description",
      type: "blockContent", // Stöd för rich text för jobbeskrivning.
      description: "Detailed description of the job position.",
    },
    {
      name: "jobContactPerson",
      title: "Contact Email",
      type: "string",
      description: "Email address for applying or contacting about the job.",
    },
  ],
};
