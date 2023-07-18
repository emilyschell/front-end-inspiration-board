import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SortBoardMenu from "./SortBoardMenu";
import NewBoardForm from "./Forms/NewBoardForm";
// import UpdateBoardForm from "./Forms/UpdateBoardForm";
// import VerifyDeleteBoard from "./VerifyDeleteBoard";
import "./Styles/SortBoardMenu.css";
import { BiSort } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
// import { BsDash } from "react-icons/bs";

// import { CgSidebarOpen } from "react-icons/cg";
// import { TiDelete } from "react-icons/ti";

const BoardList = ({
  getBoards,
  boards,
  selected,
  selectBoard,
  onAddBoardCallback,
  onDeleteBoardCallback,
  updateBoardCallback,
}) => {
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");
  const [hide, setHide] = useState(true);
  // const [hideBoardMenu, setHideBoardMenu] = useState(true);
  // const [hideDelete, setHideDelete] = useState(true);
  // const [deleteAttempt, setDeleteAttempt] = useState(false);

  // const shownBoardMenu = hideBoardMenu ? "hidden" : "board-menu-container";
  // const shownDelete = hideDelete ? "hidden" : "shown";
  const shown = hide ? "hidden" : "shown";

  const sortedBoards = boards.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "id" ? a[sortBy] : a[sortBy].toLowerCase();
    let sortByB = sortBy === "id" ? b[sortBy] : b[sortBy].toLowerCase();
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const displayBoard = () => {
    return sortedBoards.map((board, index) => {
      return (
        <li
          className={
            board.id === selected.id
              ? "board-menu-item-selected"
              : "board-menu-item-not-selected"
          }
          key={index}
          onClick={() => selectBoard(board.id)}
        >
          {/* BOARD
          <div id="board-menu-item-icon">
            <CgSidebarOpen
              className="icons"
              size={30}
              onClick={() => { if (board.id === selected.id) {setHideBoardMenu(!hideBoardMenu)}}}
            />
            <section className={shownBoardMenu}>
              <div>
                <UpdateBoardForm
                  board={board}
                  updateBoardCallback={updateBoardCallback}
                />
              </div>
              <div>
                <TiDelete
                  className="icons"
                  size={30}
                  onClick={() => {
                    setDeleteAttempt(true);
                    setHideDelete(!hideDelete);
                  }}
                />
                <section className={shownDelete}>
                  {deleteAttempt && (
                    <VerifyDeleteBoard
                      onDeleteBoardCallback={onDeleteBoardCallback}
                      onCancelCallback={() => {
                        setDeleteAttempt(false);
                      }}
                      id={board.id}
                    />
                  )}
                </section>
              </div>
            </section>
          </div> */}
          <div id="board-menu-item-icon">
            <BiChevronsRight
              className={board.id === selected.id ? "icons-selected" : "icons"}
              size={30}
            />
          </div>
          <div>
            {board.title} by {board.owner}
          </div>
        </li>
      );
    });
  };

  useEffect(() => {
    getBoards();
  }, []);
  return (
    <section>
      <div>
        <h1 id="page-title">ma5en's Inspo Board</h1>
        <div className="board-list--icons">
          <div className="board-list---icons--align">
            <NewBoardForm onAddBoardCallback={onAddBoardCallback} />
            Add Board
          </div>
          <div className="board-list---icons--align">
            <BiSort
              className="icons"
              size={30}
              onClick={() => setHide(!hide)}
            />
            Sort Board
          </div>
          {/* <button onClick={getBoards}>Refresh</button> */}
        </div>
        <section className={shown}>
          <div className="sort-menu--container">
            <SortBoardMenu
              sortBy={sortBy}
              onSortByChange={(sortOption) => {
                setSortBy(sortOption);
              }}
              orderBy={orderBy}
              onOrderByChange={(orderOption) => {
                setOrderBy(orderOption);
              }}
            />
          </div>
        </section>
      </div>
      <ul>{displayBoard()}</ul>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  selectBoard: PropTypes.func.isRequired,
  onAddBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
