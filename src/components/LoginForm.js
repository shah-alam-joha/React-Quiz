import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from '../styles/Login.module.css';
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");
            await login(email, password);
            navigate("/");
        } catch (err) {
            setError("Failed to loging!");
            setLoading(false);
        }
    }

    return (
        <Form className={classes.login} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter Email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />

            <TextInput
                type="password"
                placeholder="Enter password"
                required
                icon="lock"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />

            <Button type="submit" disabled={loading}>
                <span>Submit now</span>
            </Button>
            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}
