"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarDays, Users } from "lucide-react";
import dayjs from "dayjs";

// Define booking form schema
const bookingSchema = z.object({
  checkIn: z.date({
    required_error: "Check-in date is required",
  }),
  checkOut: z.date({
    required_error: "Check-out date is required",
  }),
  guests: z.number().min(1, "At least 1 guest required").max(10, "Maximum 10 guests allowed"),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: 1,
      specialRequests: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    try {
      // TODO: Implement booking submission logic
      console.log("Booking data:", data);
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Book Your Stay</h1>
          <p className="text-muted-foreground">
            Fill in the details below to make your reservation
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in Date</label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="date"
                  {...form.register("checkIn", { valueAsDate: true })}
                  min={dayjs().format("YYYY-MM-DD")}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                />
              </div>
              {form.formState.errors.checkIn && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.checkIn.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out Date</label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="date"
                  {...form.register("checkOut", { valueAsDate: true })}
                  min={dayjs().add(1, "day").format("YYYY-MM-DD")}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                />
              </div>
              {form.formState.errors.checkOut && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.checkOut.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="number"
                  {...form.register("guests", { valueAsNumber: true })}
                  min={1}
                  max={10}
                  className="w-full pl-10 pr-3 py-2 border rounded-md"
                />
              </div>
              {form.formState.errors.guests && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.guests.message}
                </p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Special Requests</label>
              <textarea
                {...form.register("specialRequests")}
                rows={4}
                className="w-full p-3 border rounded-md resize-none"
                placeholder="Any special requirements or requests..."
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium"
          >
            Book Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
