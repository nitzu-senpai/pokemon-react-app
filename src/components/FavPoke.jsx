export default function FavPoke({ name, id, exp }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        margin: "10px",
        padding: "20px",
        borderRadius:"20px",
        backgroundColor: "gray",
      }}
    >
      <div style={{fontSize:"55px",marginTop:"23px",height:"50px"}}>{name}</div>
      <hr />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        width={"100%"}
      />
      <hr />
      <div style={{fontSize:"25px"}}>Base Experience :{exp}</div>
    </div>
  );
}
