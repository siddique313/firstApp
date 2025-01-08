// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// // Zod schema for validation
// const admissionFormSchema = z.object({
//   name: z.string()
//     .min(1, { message: "Name is required" })
//     .max(100, { message: "Name cannot exceed 100 characters" }),

//   email: z.string()
//     .email({ message: "Invalid email address" })
//     .min(1, { message: "Email is required" }),

//   password: z.string()
//     .min(8, { message: "Password must be at least 8 characters long" })
//     .regex(/[A-Za-z]/, { message: "Password must contain letters" })
//     .regex(/\d/, { message: "Password must contain numbers" })
// });

// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     resolver: zodResolver(admissionFormSchema) // Integrating Zod with react-hook-form
//   });

//   // On form submission
//   const onSubmit = (data) => {
//     console.log("Form submitted successfully", data);
//   };

//   return (
//     <div>
//       <h2>Admission Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Name */}
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             {...register("name")}
//             placeholder="Enter your name"
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             {...register("email")}
//             placeholder="Enter your email"
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         {/* Password */}
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register("password")}
//             placeholder="Enter your password"
//           />
//           {errors.password && <p>{errors.password.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;
 import React from 'react'
import Card from './component/card'
 
 export default function App() {
   return (
     <div>
       <Card/>
     </div>
   )
 }
 