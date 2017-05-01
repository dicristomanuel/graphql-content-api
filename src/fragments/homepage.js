export default `
{
  person (id: "0110") {
    firstName
    friends {
      firstName
      friends {
        email
      }
    }
  }
}
`;
