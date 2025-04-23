/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_no4thkg",
          "template_9oqy8fj",
          form.current,
          "W1lU8EoqBODGQvYTD"
        );
      } else {
        throw new Error("Form reference is null.");
      }
      setStatus({ type: "success", message: "Message sent successfully!" });
      form.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" sx={{ fontWeight:700,
            lineHeight:'50px',
            mb:'20px' }}>
        Let&apos;s Work <Typography component='span' variant="h2" sx={{color: '#8D4AEA',fontWeight: 700,
          lineHeight: "50px"}}>Together</Typography>
      </Typography>

      <Paper
        elevation={3}
        sx={{ p: 4, backgroundColor: "#292A2B", borderRadius: "12px" }}
      >
        {status && (
          <Alert severity={status.type} sx={{ mt: 2, mb: 2 }}>
            {status.message}
          </Alert>
        )}
        <Stack component="form" ref={form} onSubmit={handleSubmit} spacing={2}>
          <TextField
            label="Your Name"
            variant="outlined"
            name="user_name"
            margin="normal"
            required
            sx={{ color: "white" }}
          />
          <TextField
            label="Your Email"
            name="user_email"
            type="email"
            margin="normal"
            required
            variant="outlined"
            sx={{ color: "white" }}
          />
          <TextField
            label="Message"
            variant="outlined"
            name="message"
            multiline
            rows={5}
            required
            sx={{ color: "white" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              color: "#fff",
              backgroundColor: "#8E4BEB",
              "&:hover": {
                backgroundColor: "#6D32B8",
              },
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ContactForm;