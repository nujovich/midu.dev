import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.string().optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    draft: z.boolean().optional(),
  }),
});
const agenda = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
    startTime: z
      .string()
      .or(z.date())
      .transform((val) => {
        const [time, period] = val.split(" ");
        let [hours, minutes] = time.split(":");

        if (period.toLowerCase() === "pm") {
          hours = parseInt(hours, 10) + 12; // Agregar 12 horas para formato PM
        }

        const date = new Date();
        date.setUTCHours(hours - 2); // Restar 2 horas para ajustar a la zona horaria de España
        date.setUTCMinutes(minutes);

        return date;
      })
      .optional(),
    endTime: z
      .string()
      .or(z.date())
      .transform((val) => {
        const [time, period] = val.split(" ");
        let [hours, minutes] = time.split(":");

        if (period.toLowerCase() === "pm") {
          hours = parseInt(hours, 10) + 12; // Agregar 12 horas para formato PM
        }

        const date = new Date();
        date.setUTCHours(hours - 2); // Restar 2 horas para ajustar a la zona horaria de España
        date.setUTCMinutes(minutes);

        return date;
      })
      .optional(),
  }),
});

export const collections = { blog, agenda };
