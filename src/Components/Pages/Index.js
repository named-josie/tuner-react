import Songs from "../Songs";

function Index() {
  return (
    <div className="Index">
     <div className="song-title"> <h1>Songs List</h1></div>
     <hr></hr>
      <Songs />
    </div>
  );
}

export default Index;