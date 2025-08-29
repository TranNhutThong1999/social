// import { NextRequest, NextResponse } from "next/server";

// // Mock user data for demonstration
// const users = [
//   {
//     id: "1",
//     name: "John Doe",
//     email: "john@example.com",
//     password: "password123", // In real app, this would be hashed
//     createdAt: new Date().toISOString(),
//   },
// ];

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { action, ...data } = body;

//     switch (action) {
//       case "login":
//         return handleLogin(data);
//       case "register":
//         return handleRegister(data);
//       case "logout":
//         return handleLogout();
//       default:
//         return NextResponse.json(
//           { error: "Invalid action" },
//           { status: 400 }
//         );
//     }
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// async function handleLogin(data: { email: string; password: string }) {
//   const { email, password } = data;

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     return NextResponse.json(
//       { error: "Invalid credentials" },
//       { status: 401 }
//     );
//   }

//   const { password: _, ...userWithoutPassword } = user;

//   return NextResponse.json(userWithoutPassword);
// }

// async function handleRegister(data: { name: string; email: string; password: string }) {
//   const { name, email, password } = data;

//   const existingUser = users.find((u) => u.email === email);

//   if (existingUser) {
//     return NextResponse.json(
//       { error: "User already exists" },
//       { status: 409 }
//     );
//   }

//   const newUser = {
//     id: (users.length + 1).toString(),
//     name,
//     email,
//     password,
//     createdAt: new Date().toISOString(),
//   };

//   users.push(newUser);

//   const { password: _, ...userWithoutPassword } = newUser;

//   return NextResponse.json(userWithoutPassword, { status: 201 });
// }

// async function handleLogout() {
//   return NextResponse.json({ message: "Logged out successfully" });
// }
