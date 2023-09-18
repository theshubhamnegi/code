import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <h5 className={styles.heading}>currently not working.</h5>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.inputfields}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className={styles.inputfields}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              className={styles.inputfields}
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className={styles.inputfields}
              type="message"
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;

// this section is from the testing code ---------------------------------

// // import { useState } from 'react';
// // import ContactCode from '../components/ContactCode';
// // import styles from '../styles/ContactPage.module.css';
// // import { sendContactForm } from '../lib/api';

// // // this is the video code ---------------------------------
// // const initValues = {
// //   name: "",
// //   email: "",
// //   subject: "",
// //   message: "",
// // }
// // const initState = {values : initValues}
// // // this is the video code ---------------------------------

// // const ContactPage = () => {
// //   // const [name, setName] = useState('');
// //   // const [email, setEmail] = useState('');
// //   // const [subject, setSubject] = useState('');
// //   // const [message, setMessage] = useState('');

// //   // const submitForm = async (e) => {
// //   //   e.preventDefault();
// //   //   console.log(process.env.NEXT_PUBLIC_API_URL);
// //   //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
// //   //     method: 'POST',
// //   //     body: JSON.stringify({ name, email, subject, message }),
// //   //   });
// //   //   if (res.ok) {
// //   //     alert('Your response has been received!');
// //   //     setName('');
// //   //     setEmail('');
// //   //     setSubject('');
// //   //     setMessage('');
// //   //   } else {
// //   //     alert('There was an error. Please try again in a while.');
// //   //   }
// //   // };


// //   // this is the video code -----------------------------
// //   // const [ state , setState ] = useState(initState);
  
// //   // const { values , error } = state;

// //   const [state, setState] = useState({ values: initValues, error: '', success: false });
// //   const { values, error, success } = state;

// //   const handleChange = ({target}) => setState((prev) => ({
// //     ...prev,
// //     values: {
// //       ...prev.values,
// //       [target.name] : target.value,
// //     },
// //   }));

// //   // const onSubmit = async (e) => {
// //   //   setState((prev) => ({
// //   //     ...prev,
// //   //   }));
// //   //   await sendContactForm(values)
// //   // };
  
// //   // const onSubmit = async () => {
// //   //   setState((prev) => ({
// //   //     ...prev,
// //   //     isLoading: true,
// //   //   }));
// //   //   try {
// //   //     await sendContactForm(values);
// //   //     setTouched({});
// //   //     setState(initState);
// //   //     toast({
// //   //       title: "Message sent.",
// //   //       status: "success",
// //   //       duration: 2000,
// //   //       position: "top",
// //   //     });
// //   //   } catch (error) {
// //   //     setState((prev) => ({
// //   //       ...prev,
// //   //       isLoading: false,
// //   //       error: error.message,
// //   //     }));
// //   //   }
// //   // };

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!values.name || !values.email || !values.subject || !values.message) {
// //       setState((prev) => ({ ...prev, error: 'Please fill out all fields', success: false }));
// //       return;
// //     }
// //     try {
// //       await sendContactForm(values);
// //       setState({ values: initValues, error: '', success: true });
// //       alert(`mail sent`)
// //     } catch (error) {
// //       setState((prev) => ({ ...prev, error: error.message, success: false }));
// //       alert(`Error: ${error.message}`);
// //     }
// //   };


// //   // this is the video code -----------------------------

// //   return (
// //     <div className={styles.container}>
// //       <div>
// //         <h3 className={styles.heading}>Reach Out Via Socials</h3>
// //         <ContactCode />
// //       </div>
// //       <div>
// //         <h3 className={styles.heading}>Or Fill Out This Form</h3>
// //         <form className={styles.form} 
// //           // onSubmit={submitForm} 
// //           required
// //         >
// //           <div className={styles.flex}>
// //             <div>
// //               <label htmlFor="name">Name</label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 id="name"
// //                 value={values.name}
// //                 onChange={handleChange}
// //                 required
// //                 className={styles.inputfields}
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="email">Email</label>
// //               <input
// //                 className={styles.inputfields}
// //                 type="email"
// //                 name="email"
// //                 id="email"
// //                 value={values.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>
// //           <div>
// //             <label htmlFor="name">Subject</label>
// //             <input
// //               className={styles.inputfields}
// //               type="text"
// //               name="subject"
// //               id="subject"
// //               value={values.subject}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="message">Message</label>
// //             <textarea
// //               className={styles.inputfields}
// //               type="message"
// //               name="message"
// //               id="message"
// //               rows="5"
// //               value={values.message}
// //               onChange={handleChange}
// //               required
// //             ></textarea>
// //           </div>
// //           {error && <p>{error}</p>}
// //           {success && <p>Message sent.</p>}
// //           <button type="submit" onClick={onSubmit}>Submit</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export async function getStaticProps() {
// //   return {
// //     props: { title: 'Contact' },
// //   };
// // }

// // export default ContactPage;




// import { useState } from 'react';
// import ContactCode from '../components/ContactCode';
// import styles from '../styles/ContactPage.module.css';
// import { sendContactForm } from '../lib/api';

// const initValues = {
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// };
// const initState = {values : initValues}

// const ContactPage = () => {
//   const [state, setState] = useState({ values: initValues, errors: {}, success: false });
//   const { values, errors, success , error} = state;

//   const handleChange = ({ target }) => {
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value,
//       },
//       errors: {
//         ...prev.errors,
//         [target.name]: '',
//       },
//     }));
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const fieldErrors = {};
//     let hasErrors = false;

//     Object.keys(values).forEach((key) => {
//       if (!values[key]) {
//         fieldErrors[key] = 'This field is required';
//         hasErrors = true;
//       }
//     });

//     // Check if email is valid
//     if (values.email && !validateEmail(values.email)) {
//       fieldErrors.email = 'Please enter a valid email';
//       hasErrors = true;
//     }

//     if (hasErrors) {
//       setState((prev) => ({ ...prev, errors: fieldErrors, success: false }));
//       return;
//     }

//     try {
//       await sendContactForm(values);
//       setState({ values: initValues, errors: {}, success: true,error: '' });
//       alert('Message sent');
//     } catch (error) {
//       setState((prev) => ({ ...prev, errors: {}, success: false,error: error.message }));
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div>
//         <h3 className={styles.heading}>Reach Out Via Socials</h3>
//         <ContactCode />
//       </div>
//       <div>
//         <h3 className={styles.heading}>Or Fill Out This Form</h3>
//         <form className={styles.form} onSubmit={onSubmit} required>
//           <div className={styles.flex}>
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 required
//                 className={styles.inputfields}
//               />
//               {errors.name && <p className={styles.error}>{errors.name}</p>}
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 className={styles.inputfields}
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.email && <p className={styles.error}>{errors.email}</p>}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="name">Subject</label>
//             <input
//               className={styles.inputfields}
//               type="text"
//               name="subject"
//               id="subject"
//               value={values.subject}
//               onChange={handleChange}
//               required
//             />
//             {errors.subject && <p className={styles.error}>{errors.subject}</p>}
//           </div>
//           <div>
//             <label htmlFor="message">Message</label>
//             <textarea
//               className={styles.inputfields}
//               type="message"
//               name="message"
//               id="message"
//               rows="5"
//               value={values.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//             {errors.message && <p className={styles.error}>{errors.message}</p>}
//           </div>
//           {errors.email && !errors.email && (
//             <p className={styles.error}>Please enter a valid email</p>
//           )}
//           {success && <p>Message sent.</p>}
//           {error && <p>{error} try again later</p>}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   return {
//     props: { title: 'Contact' },
//   };
// }

// export default ContactPage;
