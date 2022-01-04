export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let username = "Bhavesh";
  let email = "Bhaveshpatil344@gmail.com";
  let id = 100;
  let list = ["jalgaon", "calcutta", "chennai"];

  // CAREFUL :: When working with Object
  let obj = { id: 1, name: "rahul" };

  return (
    <div>
      <h1>Leranig Interpolation {"jalgaon".toUpperCase()} </h1>
      <h1>
        {username} = {email} & {id}
      </h1>
      <h1>{list}</h1>
      <h1>
        {obj.id} {obj.name}
        {`I am also JS ${obj.id} and ${obj.name}`}
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nisi
        autem eius libero omnis excepturi rem non consequuntur aut dolorum
        asperiores aperiam deserunt nihil, consequatur, numquam ipsum saepe.
        Architecto, odio.
      </p>
    </div>
  );
}
