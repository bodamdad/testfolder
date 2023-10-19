import FormComponent from './components/FormComponent';

export default function Write() {
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const content = formData.get("content");

    const response = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="p-20">
      <FormComponent onSubmit={submitHandler} />
    </div>
  );
}
