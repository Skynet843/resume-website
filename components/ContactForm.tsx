"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HandleChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

const services = [
  {
    value: "full-stack",
    label: "Full-stack development",
  },
  {
    value: "frontend",
    label: "Frontend development",
  },
  {
    value: "backend",
    label: "Backend development",
  },
  {
    value: "python",
    label: "Python development",
  },
];

const ContactForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramValue = searchParams.get("service") ?? "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Remove the 'service' parameter from the URL
  const removeServiceParam = () => {
    if (paramValue) {
      const params = new URLSearchParams(searchParams.toString()); // Clone the search params
      params.delete("service"); // Remove the 'service' parameter

      router.replace(`/contact?${params.toString()}`); // Update the URL ( replaced url /contact?"")
    }
  };

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <h3 className="text-4xl text-accent">Let&apos;s work togather</h3>

        <p className="text-white/60 ">
          Ready to bring your web projects to life with optimized performance.
          Let&apos;s collaborate to create innovative solutions using modern
          technologies.
        </p>

        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            required={true}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "firstName",
                  value: e.target.value,
                },
              })
            }
            type="firstname"
            placeholder="First name"
          />
          <Input
            required={true}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "lastName",
                  value: e.target.value,
                },
              })
            }
            type="lastname"
            placeholder="Last name"
          />
          <Input
            required={true}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "email",
                  value: e.target.value,
                },
              })
            }
            type="email"
            placeholder="Email"
          />
          <Input
            type="phone"
            onChange={(e) =>
              handleChange({
                target: {
                  name: "phone",
                  value: e.target.value,
                },
              })
            }
            placeholder="Phone number"
          />
        </div>

        {/* select */}
        <Select
          defaultValue={
            services.some((service) => service.value === paramValue)
              ? paramValue
              : ""
          }
          onValueChange={(value) => {
            removeServiceParam();
            handleChange({
              target: {
                name: "service",
                value: value,
              },
            });
          }}
        >
          <SelectTrigger
            className={`w-full ${
              services.some((service) => service.value === paramValue)
                ? "border-accent"
                : ""
            }`}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              {services.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* textarea */}
        <Textarea
          className="h-[200px]"
          onChange={(e) =>
            handleChange({
              target: {
                name: "message",
                value: e.target.value,
              },
            })
          }
          placeholder="Type your message here."
        />

        {/* btn */}
        <Button size="md" className="max-w-40">
          Send message
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
