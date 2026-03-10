const form = document.getElementById("registrationForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    fullName: form.fullName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    whatsAppNumber: form.whatsAppNumber.value,
    gender: form.gender.value,
    maritalStatus: form.maritalStatus.value,
    address: form.address.value,
    occupation: form.occupation.value,
    weddingAnniversary: form.weddingAnniversary.value,
    dob: form.dob.value,
  };

  console.log(formData);
  // return;

  try {
    const res = await fetch("http://localhost:3000/phc-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      console.log("Succesfful", res, data);
    } else {
    }
    form.reset();
  } catch (err) {
    console.error(err);
  }
});
