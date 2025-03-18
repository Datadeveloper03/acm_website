role: text("role").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description").notNull(),
  socialLinks: text("social_links").array()
  socialLinks: text("social_links").array().notNull()
});
export const events = pgTable("events", {
-1
+1
  date: timestamp("date").notNull(),
  imageUrl: text("image_url").notNull(),
  isUpcoming: boolean("is_upcoming").notNull().default(true),
  registrationLink: text("registration_link")
  registrationLink: text("registration_link").notNull().default('')
});