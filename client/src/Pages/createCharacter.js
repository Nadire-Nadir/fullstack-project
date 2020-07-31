import React from "react";
import AddCharacter from "../components/addCharacter";
import Header from "../components/header";



const CreateCharacter = () => (
    <div className="page"  id="add_character_page">
        <div className="page_content">
            <Header directto="" btnlabel="Back to my characters" pagetitle="Character Builder" />
            <AddCharacter />
        </div>
    </div>

);

export default CreateCharacter;