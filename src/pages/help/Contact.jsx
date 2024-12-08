import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  // we use actionData for validation
  const data = useActionData()

    return (
      <div className="contact">
        <h3>Contact Us</h3>
  {/*We use Routes Form (capital F), and method as post (doesnt send request to
   backend just how we use it on frontend)  */}
   {/* action is kind of like a loader function that runs when the form is submitted, and we 
   want to specify the route path itll work with, since this is in the help route it goes /help/contact*/}
          <Form method='post' action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>
  {/* basically if data and data.error exist, display the error */}
          {data && data.error && <p>{data.error}</p>}
        </Form>
      </div>
    )
  }

export const contactAction = async ({ request }) => {
  // we create our special request prop which is from router and make it a variable
  const data = await request.formData()

  // we then create a object for our submission using .get(nameOfOurData) to make that a variable
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  //validation without using backend
  if(submission.message.length < 10 ) {
    return {error: 'message must be over 10 characters long'}
  }
  //redirect the user
  //since we arent doing anything with this data we use the redirect which is special from
  //react router and send the user back to the homepage
  return redirect('/')
}