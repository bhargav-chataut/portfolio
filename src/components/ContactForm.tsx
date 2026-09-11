import { Send } from 'lucide-react'

export function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/bhargavchataut.bc@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New message from bhargav-chataut portfolio" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input className="honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>

      <label>
        <span>Message</span>
        <textarea name="message" rows={6} placeholder="What do you want to talk about?" required />
      </label>

      <button className="send-btn" type="submit">
        Send message <Send size={16} />
      </button>
    </form>
  )
}
