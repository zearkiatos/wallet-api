import connection from "../../../persistence/MSSqlPersistence";
import Movement from "../../domain/Movement";
import MovementRepository from "../../MovementRepository";
import { movementsMapper, movementMapper } from "../Adapter/MovementAdapter";

class MovementMSSQLRepository implements MovementRepository {
  public async find(id: number): Promise<Movement | null> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_movement WHERE id=${id}`;

    if (result.rowsAffected) {
      return movementMapper(result.recordset[0]);
    }

    return null;
  }
  public async all(): Promise<Movement[]> {
    const pool = await connection;
    const result =
      await pool.query`SELECT * FROM wallet_movement ORDER BY id DESC`;

    return movementsMapper(result.recordset);
  }
  public async store(entry: Movement): Promise<void> {
    const pool = await connection;
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");

    await pool.query`INSERT INTO wallet_movement(user_id, type, amount, created_at, updated_at) VALUES(${entry.userId}, ${entry.type}, ${entry.amount}, ${now}, ${now})`;
  }
  public async update(entry: Movement): Promise<void> {
    const pool = await connection;
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");

    await pool.query`UPDATE wallet_movement SET user_id=${entry.userId}, type=${entry.type}, amount=${entry.amount}, updated_at=${now} WHERE id=${entry.id}`;
  }
  public async remove(id: number): Promise<void> {
    const pool = await connection;

    await pool.query`DELETE FROM wallet_movement WHERE id=${id}`;
  }
}

export default MovementMSSQLRepository;
