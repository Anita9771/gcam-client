const GiveNow = () => {
  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Give Now</h1>
        <p className="text-lg italic text-[#FFF5E1]/80">
          "Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver." – 2 Corinthians 9:7
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4">Bank Transfer Details</h2>
        <ul className="space-y-2 text-[#FFF5E1]/90">
          <li>
            <strong>Bank Name:</strong> Access Bank (Naira Account)
          </li>
          <li>
            <strong>Account Name:</strong> Glorious Christ Ambassadors
            Ministries Int'l
          </li>
          <li>
            <strong>Account Number:</strong> 19141 83140
          </li>
        </ul>
        <br />
        <ul className="space-y-2 text-[#FFF5E1]/90">
          <li>
            <strong>Bank Name:</strong> Tiroler Sparkasse Bank (Euro Account)
          </li>
          <li>
            <strong>Account Name:</strong> Glorious Christ Ambassadors
            Ministries Int'l
          </li>
          <li>
            <strong>AT:</strong> 222 050 303 302 076 173
          </li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4">Mail a Cheque</h2>
        <p className="text-[#FFF5E1]/90 mb-2">
          Please make checks payable to{" "}
          <strong>Glorious Christ Ambassadors Ministries</strong> and mail to:
        </p>
        <address className="not-italic text-[#FFF5E1]/90">
          Glorious Christ Ambassadors Ministries
          <br />
          Kaplanstrasse 2, Top 1,
          <br />
          6063 Neu-Rum, Austria.
          <br />
          Austria
        </address>
      </div>

      {/* <div className="text-center">
        <img
          src="/images/give-now.jpg"
          alt="Giving Heart"
          className="mx-auto rounded-lg shadow-lg w-full max-w-xl"
        />
      </div> */}
    </div>
  );
};

export default GiveNow;
