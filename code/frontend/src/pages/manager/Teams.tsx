import { TeamResponse } from "@/interfaces/Team";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useUserStore from "@/store";
import { CreateTeam } from "../CreateTeam";
import TeamCard from "@/components/TeamCard";
import Team from "@/components/Team";

export const Teams = () => {
  const [teams, setTeams] = useState<TeamResponse[]>([]);
  const [error, setError] = useState<unknown>();

  const user = useUserStore((state) => state.user);

  // Fetch teams by coach id
  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/teams?coach_id=${user?.id}`
        );
        setTeams(response.data);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.response?.data);
      }
    };
    getTeams();
  }, [user?.id]);

  console.log(error)

  // Track the chosen team id
  const [choosen, setChoosen] = useState<number | null>(null);

  return (
    <div className="w-full h-full min-h-screen mt-4 flex flex-row justify-start">
      <div>
        {teams? (
          teams.map((team: TeamResponse) => (
            <div
              key={team.team_id}
              onClick={() => setChoosen(team.team_id)}
              className="cursor-pointer ml-8"
            >
              {/* Pass a prop to indicate if this team is selected */}
              <TeamCard choosen={choosen === team.team_id} team={team} />
            </div>
          ))
        ) : (
          <div className="text-center w-full h-full min-h-screen flex flex-col items-center justify-center text-3xl text-slate-500">
            <div>Oops! You have no teams yet. Let's create some!</div>
            <CreateTeam coach_id={user?.id} />
          </div>
        )}
        <div className="w-full flex flex-row items-center justify-center">
          <CreateTeam coach_id={user?.id} />
        </div>
      </div>

      {/* Display the selected team details */}
      {choosen !== null && <Team team_id={choosen} />}
    </div>
  );
};
