import { useEffect, useState } from "react";
import "./DogBreeds.css";

const CatFacts = () => {
  const [breeds, setBreeds] = useState<Record<string, string[]>>({});

  return (
    <section>
      <h2>Dog breeds</h2>

      <p>
        A list of dog breeds fetched from{" "}
        <a href="https://dog.ceo/dog-api/">Dog API</a>
      </p>

      <table>
        <thead>
          <tr>
            <th>Breed</th>
            <th>Sub breeds</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>?</td>
            <td>?</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CatFacts;
