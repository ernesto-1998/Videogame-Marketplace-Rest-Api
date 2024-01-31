CREATE OR REPLACE FUNCTION update_updated_on_user_task()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE OR REPLACE TRIGGER update_user_task_updated_on
    BEFORE UPDATE
    ON
        public.address
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_user_task();

CREATE OR REPLACE TRIGGER update_user_task_updated_on
    BEFORE UPDATE
    ON
        public.console
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_user_task();

CREATE OR REPLACE TRIGGER update_user_task_updated_on
    BEFORE UPDATE
    ON
        public.periferic
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_user_task();

CREATE OR REPLACE TRIGGER update_user_task_updated_on
    BEFORE UPDATE
    ON
        public.profile
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_user_task();

CREATE OR REPLACE TRIGGER update_user_task_updated_on
    BEFORE UPDATE
    ON
        public.user
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_user_task();

CREATE OR REPLACE TRIGGER update_user_task_updated_on
    BEFORE UPDATE
    ON
        public.videogame
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_on_user_task();