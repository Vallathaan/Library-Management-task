import "./sb-admin-2.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./portal/Portal";
import Dashboard from "./Dashboard";
import { UserProvider } from "./Context/UserContext";
import { LoginProvider } from "./Context/LoginContext";
import Books from "./Books";
import AddBook from "./AddBook";
import BorrowBook from "./BorrowBook";
import ReturnBook from "./ReturnBook";
import BookView from "./BookView";
import EditBooks from "./EditBook";
import Member from "./Members";
import MemberView from "./MembersView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/portal" element={<Portal />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="books" element={<Books />} />
                <Route path="addbook" element={<AddBook />} />
                <Route path="editbook/:id" element={<EditBooks />} />
                <Route path="bookview/:id" element={<BookView />} />
                <Route path="borrowbook/:id" element={<BorrowBook />} />
                <Route path="returnbook/:id" element={<ReturnBook />} />
                <Route path="members" element={<Member />} />
                <Route path="memberview/:id" element={<MemberView />} />
              </Route>
            </Routes>
          </LoginProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;