import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-black">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#1d4ed8", // Button and link color
              colorText: "#ffffff", // General text color
              colorBackground: "#111827", // Background color
              colorDanger: "#ef4444", // Error messages
              borderRadius: "0.5rem", // Rounded corners
              fontFamily: "DM Sans, sans-serif", // Font family
              fontSize: "16px", // Base font size
            },
            elements: {
              card: "bg-gray-800 text-white border border-gray-700 rounded-lg shadow-lg",
              button: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
              input: "bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2",
              footer: "text-sm text-gray-400",
              socialButtonsBlockButton: "bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded-md",
            },
          }}
          routing="path"
          path="/sign-in"
        />
      </div>
    </div>
  );
}
