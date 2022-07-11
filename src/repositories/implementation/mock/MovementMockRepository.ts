import db from "../../../persistence/MockPersistence";
import Movement from "../../domain/Movement";
import MovementRepository from "../../MovementRepository";

class MovementMockRepository implements MovementRepository {
  public async find(id: number): Promise<Movement | null> {
    const movements = db.movements as Movement[];
    const result = movements.find((movement) => movement.id === id);

    if (result) return { ...result };

    return null;
  }
  public async all(): Promise<Movement[]> {
    const movements = db.movements as Movement[];
    return [...movements];
  }
  public async store(entry: Movement): Promise<void> {
    const movements = db.movements as Movement[];
    const now = new Date();

    db._movementId++;

    movements.push({
      id: db._movementId,
      type: entry.type,
      amount: entry.amount,
      userId: entry.userId,
      createdAt: now,
      updatedAt: now,
    } as Movement);
  }
  public async update(entry: Movement): Promise<void> {
    const movements = db.movements as Movement[];
    const now = new Date();

    const originalEntry = movements.find(
      (movement) => movement.id === entry.id
    );

    if (originalEntry) {
      originalEntry.type = entry.type;
      originalEntry.userId = entry.userId;
      originalEntry.amount = entry.amount;
      originalEntry.updatedAt = now;
    }
  }
  public async remove(id: number): Promise<void> {
    const movements = db.movements as Movement[];
   db.movements = movements.filter(
      (movement) => movement.id !== id
    ) as any;
  }
}

export default MovementMockRepository;
