const AddArticle = ({ handleSubmit, title, setTitle, author, setAuthor }) => {
  return (
    <div>
      <div className="container text-center bg-light p-1">
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Ajouter vos livres</h1>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titre du livre:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description:
              </label>
              <textarea
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-outline-primary">
                Ajouter un Article
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
