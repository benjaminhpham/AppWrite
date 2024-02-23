import Card from "./components/Card";

export default function App() {
  const myObj = {
    name: "Benji",
    age: 30,
    address: {
      city: "Denver",
      state: "CO",
    },
  };

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card
        username="Benji"
        img="https://images.unsplash.com/photo-1708361089093-beef4c4584e7?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        myArr={myArr}
      />
      <Card
        username="Json"
        img="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        username="Eugene"
        img="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
      />
    </>
  );
}
