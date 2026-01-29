export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Checkout
        </h1>
        <p className="text-gray-400">
          Checkout isn’t live yet. For now, head to{" "}
          <a href="/donate" className="text-seagreen hover:underline">
            Donate
          </a>{" "}
          or view{" "}
          <a href="/products" className="text-seagreen hover:underline">
            Modules
          </a>
          .
        </p>
      </div>
    </main>
  );
}
