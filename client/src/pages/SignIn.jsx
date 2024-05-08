import React from "react";
import { Link } from 'react-router-dom';

export default function SignIn() {
    return <div>SignIn
        <Link to={"/sign-up"}>
            <span className="text-blue-700">Sign In</span>
        </Link>
    </div>;
}
