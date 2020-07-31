import React from "react";

export const ScoreCalc = (props) => (
    <div className="score_calc_single">
        <div className="score_calc_header">
            <div className="score_calc_header_p">{props.score_header}</div>
        </div>
        <div className="score_calc_content">
            <div className="score_calc_row">
                <div className="score_calc_row_title">Total Score</div>
                <div className="score_calc_row_result">{props.total_score}</div>
            </div>
            <div className="score_calc_row">
                <div className="score_calc_row_title">Modifier</div>
                <div className="score_calc_row_result">{props.modifier}</div>
            </div>
            <div className="score_calc_row">
                <div className="score_calc_row_title">Base Score</div>
                <div className="score_calc_row_result">{props.base_score}</div>
            </div>
            <div className="score_calc_row">
                <div className="score_calc_row_title">Racial Bonus</div>
                <div className="score_calc_row_result">+0</div>
            </div>
            <div className="score_calc_row">
                <div className="score_calc_row_title">Ability Improvements</div>
                <div className="score_calc_row_result">+0</div>
            </div>
            <div className="score_calc_row">
                <div className="score_calc_row_title">Misc Bonus</div>
                <div className="score_calc_row_result">+0</div>
            </div>
           
            <div className="score_calc_row">
                <div className="score_calc_row_title">Set Score</div>
                <div className="score_calc_row_result">0</div>
            </div>
        </div>

    </div>
)

export default ScoreCalc;