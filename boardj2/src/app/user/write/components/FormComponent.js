'use client'

export default function FormComponent() {

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="p-20">
      <form onSubmit={submitHandler}>
        <input name="name" placeholder="이름" />
        <input name="email" placeholder="이메일" />
        <input name="phone" placeholder="휴대폰" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
