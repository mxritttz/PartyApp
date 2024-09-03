import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";

type AuthPageProps = {
	session?: Session|null|undefined;
}

const Authentication = ({ session }: AuthPageProps) =>
	session ? <Navigate to='/'/> : 
		<Auth 
			supabaseClient={supabase} 
			appearance={{ theme: ThemeSupa }}
		/>

export default Authentication