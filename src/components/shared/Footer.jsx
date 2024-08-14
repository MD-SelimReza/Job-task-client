export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 JobTASK. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="/privacy"
            className="text-sm text-gray-400 hover:text-gray-300 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm text-gray-400 hover:text-gray-300 mx-2"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-sm text-gray-400 hover:text-gray-300 mx-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
