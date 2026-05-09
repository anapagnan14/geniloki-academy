import "./App.css";
import { useEffect, useState } from "react";

export default function App() {

  const [page, setPage] = useState("games");
  const [games, setGames] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todos");

  // CARREGA JOGOS
  useEffect(() => {

    fetch("http://localhost:3000/api/games")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => console.log(err));

  }, []);

  // NORMALIZA TEXTO
  const normalize = (text) => {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  // FILTRO
  const filteredGames = games.filter((game) => {

    const gameName = normalize(game.nome);
    const gameLevel = normalize(game.nivel);

    const currentSearch = normalize(search);
    const currentFilter = normalize(filter);

    const matchSearch =
      gameName.includes(currentSearch);

    const matchFilter =
      currentFilter === "todos" ||
      gameLevel.includes(currentFilter);

    return matchSearch && matchFilter;
  });

  // ADICIONAR AULA
  const addLesson = () => {

    if (!title || !description) return;

    const newLesson = {
      id: Date.now(),
      titulo: title,
      descricao: description
    };

    setLessons([newLesson, ...lessons]);

    setTitle("");
    setDescription("");
  };

  // APAGAR AULA
  const deleteLesson = (id) => {
    setLessons(lessons.filter((l) => l.id !== id));
  };

  return (
    <div className="app">

      {/* HERO */}
      <div className="hero">

       

        <h1 className="title">
          genilo<span className="orange">ki</span>
        </h1>

        <p className="subtitle">
          Board Games + English Learning
        </p>

        <div className="nav">

          <button onClick={() => setPage("games")}>
            Jogos
          </button>

          <button onClick={() => setPage("teachers")}>
            Teachers
          </button>

        </div>

      </div>

      {/* GAMES */}
      {page === "games" && (
        <>

          <div className="searchArea">

            <input
              className="search"
              placeholder="Pesquisar jogo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="todos">
                Todos níveis
              </option>

              <option value="basico">
                Básico
              </option>

              <option value="medio">
                Médio
              </option>

              <option value="avancado">
                Avançado
              </option>
            </select>

          </div>

          <div className="grid">

            {filteredGames.length > 0 ? (

              filteredGames.map((game, i) => (

                <div className="card" key={i}>

                  <div className="badge">
                    {game.nivel}
                  </div>

                  <h2>{game.nome}</h2>

                  <div className="info">
                    <span>⏱ {game.duracao}</span>
                  </div>

                  <p className="description">
                    {game.descricao}
                  </p>

                </div>

              ))

            ) : (

              <div
                style={{
                  width: "100%",
                  padding: "40px",
                  textAlign: "center",
                  fontSize: "20px",
                  opacity: 0.8
                }}
              >
                Nenhum jogo encontrado.
              </div>

            )}

          </div>

        </>
      )}

      {/* TEACHERS */}
      {page === "teachers" && (

        <div className="form">

          <input
            placeholder="Nome da aula"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descreva sua ideia de aula..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={addLesson}>
            Salvar Aula
          </button>

          {lessons.map((lesson) => (

            <div className="lessonCard" key={lesson.id}>

              <h3>{lesson.titulo}</h3>

              <p>{lesson.descricao}</p>

              <button
                className="deleteBtn"
                onClick={() => deleteLesson(lesson.id)}
              >
                Apagar
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}