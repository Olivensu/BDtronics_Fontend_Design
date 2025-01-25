import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 max-w-[1280px] mx-auto">
      <div className="mx-auto bg-white shadow-md rounded-md px-5">
        <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p>
              Welcome to BDTronics. By using our website <a href="https://www.bdtronics.com" className="text-blue-500 underline">www.bdtronics.com</a> and purchasing products from us, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Purchase, Price, and Payment</h2>
            <p className="mb-2">
              <strong>Order Acceptance:</strong> The Seller shall sell and the Buyer shall purchase the products in accordance with any quotation by the Seller which is accepted by the Buyer, including but not limited to orders placed using the Seller's electronic online ordering service.
            </p>
            <p className="mb-2">
              <strong>Errors and Omissions:</strong> Any typographical, clerical, or other errors or omissions in any sales literature, quotation, price list, acceptance of offer, invoice, or other document or information issued by the Seller may be corrected without prior notice or liability on the part of the Seller.
            </p>
            <p>
              <strong>Stock Availability:</strong> If the Seller is unable to deliver the goods ordered by the Buyer within 30 days due to insufficient stock, the amount paid by the Buyer will be refunded at the Buyer's request until the stock is available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Delivery</h2>
            <p className="mb-2">
              <strong>Delivery Times:</strong> Delivery of products within Dhaka is made as standard via courier service and is normally 1-5 days. Delivery outside Dhaka may be delayed.
            </p>
            <p className="mb-2">
              <strong>Responsibility:</strong> Responsibility for the goods shall pass to the Buyer upon delivery.
            </p>
            <p>
              <strong>Upgraded Delivery Costs:</strong> The price charged for faster tracked delivery via DHL/FedEx is subject to change if the delivery address is in an outlying area of a country. All increases will be agreed in advance between the Seller and the Buyer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Damages & Returns</h2>
            <p className="mb-2">
              <strong>Reporting Damages:</strong> Any damage to the product must be reported within 2 days of delivery to the Seller's customer services department.
            </p>
            <p className="mb-2">
              <strong>Return Packaging:</strong> Goods must include the original packaging. Items returned without packaging will be subject to a re-packaging fee.
            </p>
            <p>
              <strong>Testing and Refunds:</strong> All returned items will be tested within 2 days of receipt. If the goods are found to be in working condition, the goods will be returned at the user's expense.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Description of Goods</h2>
            <p>
              In the event a product is listed with an incorrect price, description, or image due to typographical error or error in information from our suppliers, we reserve the right to refuse or cancel the order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
