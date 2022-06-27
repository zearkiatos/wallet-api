import connection from "../../../persistence/MySqlPersistence";
import Movement from "../../domain/Movement";
import MovementRepository from "../../MovementRepository";
import { movementsMapper, movementMapper } from "./MovementAdapter";

class MovementMySQLRepository implements MovementRepository {
    public async find(id: number): Promise<Movement | null> {
        const [rows]: any[] = await connection.execute(
            `SELECT * FROM wallet_movement WHERE id = ${id}`
          );
      
          if (rows.length) return movementMapper(rows[0]);
      
          return null;
    }
    public async all(): Promise<Movement[]> {
        const [rows]: any[] = await connection.execute(
            "SELECT * FROM wallet_movement ORDER BY id DESC"
          );
      
          return movementsMapper(rows);
    }
    public async store(entry: Movement): Promise<void> {
        const now = new Date();
        await connection.execute(
          `INSERT INTO wallet_movement(user_id, type, amount, created_at, updated_at) VALUES(${entry.userId},${entry.type}, ${entry.amount}, ${now}, ${now})`
        );
    }
    public async update(entry: Movement): Promise<void> {
        const now = new Date();
        await connection.execute(
          `UPDATE wallet_movement SET user_id=${entry.userId}, type=${entry.type}, amount=${entry.amount}, updated_at=${now} WHERE id=${entry.id}`
        );
    }
    public async remove(id: number): Promise<void> {
        await connection.execute(`DELETE FROM wallet_movement WHERE id=${id}`);
    }
    
}

export default MovementMySQLRepository;