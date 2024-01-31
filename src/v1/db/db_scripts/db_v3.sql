--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: update_updated_on_user_task(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_on_user_task() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.address (
    id integer NOT NULL,
    user_id integer NOT NULL,
    country character varying(30) NOT NULL,
    state character varying(100),
    street character varying(255),
    zip_code character varying(15) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- Name: console; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.console (
    id integer NOT NULL,
    console_dict_id integer NOT NULL,
    user_id integer NOT NULL,
    is_used boolean NOT NULL,
    is_sold boolean NOT NULL,
    price double precision NOT NULL,
    image character varying(255) NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: console_dictionary; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.console_dictionary (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(100) NOT NULL
);


--
-- Name: console_dictionary_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.console_dictionary_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: console_dictionary_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.console_dictionary_id_seq OWNED BY public.console_dictionary.id;


--
-- Name: console_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.console_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: console_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.console_id_seq OWNED BY public.console.id;


--
-- Name: gender; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gender (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: gender_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;


--
-- Name: periferic; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.periferic (
    id integer NOT NULL,
    user_id integer NOT NULL,
    console_dict_id integer NOT NULL,
    name character varying(255) NOT NULL,
    is_used boolean NOT NULL,
    is_sold boolean NOT NULL,
    price double precision NOT NULL,
    image character varying NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: periferic_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.periferic_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: periferic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.periferic_id_seq OWNED BY public.periferic.id;


--
-- Name: profile; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profile (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    date_birth date NOT NULL,
    profile_pic character varying(255),
    contact_email character varying(255),
    contact_number character varying(50),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: profile_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.profile_id_seq OWNED BY public.profile.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    user_role_id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: user_role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_role (
    id integer NOT NULL,
    role character varying(50) NOT NULL
);


--
-- Name: user_role_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_role_id_seq OWNED BY public.user_role.id;


--
-- Name: videogame; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.videogame (
    id integer NOT NULL,
    console_dict_id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    is_used boolean NOT NULL,
    is_sold boolean NOT NULL,
    image character varying(255) NOT NULL,
    description text,
    price double precision NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: videogame_gender; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.videogame_gender (
    id integer NOT NULL,
    videogame_id integer NOT NULL,
    gender_id integer NOT NULL
);


--
-- Name: videogame_gender_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.videogame_gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: videogame_gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.videogame_gender_id_seq OWNED BY public.videogame_gender.id;


--
-- Name: videogame_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.videogame_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: videogame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.videogame_id_seq OWNED BY public.videogame.id;


--
-- Name: address id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- Name: console id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.console ALTER COLUMN id SET DEFAULT nextval('public.console_id_seq'::regclass);


--
-- Name: console_dictionary id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.console_dictionary ALTER COLUMN id SET DEFAULT nextval('public.console_dictionary_id_seq'::regclass);


--
-- Name: gender id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);


--
-- Name: periferic id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periferic ALTER COLUMN id SET DEFAULT nextval('public.periferic_id_seq'::regclass);


--
-- Name: profile id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profile ALTER COLUMN id SET DEFAULT nextval('public.profile_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: user_role id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_role ALTER COLUMN id SET DEFAULT nextval('public.user_role_id_seq'::regclass);


--
-- Name: videogame id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame ALTER COLUMN id SET DEFAULT nextval('public.videogame_id_seq'::regclass);


--
-- Name: videogame_gender id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame_gender ALTER COLUMN id SET DEFAULT nextval('public.videogame_gender_id_seq'::regclass);


--
-- Name: address pk_address; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT pk_address PRIMARY KEY (id);


--
-- Name: console pk_console; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT pk_console PRIMARY KEY (id);


--
-- Name: console_dictionary pk_console_dict; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.console_dictionary
    ADD CONSTRAINT pk_console_dict PRIMARY KEY (id);


--
-- Name: gender pk_gender; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT pk_gender PRIMARY KEY (id);


--
-- Name: periferic pk_periferic; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT pk_periferic PRIMARY KEY (id);


--
-- Name: profile pk_profile; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT pk_profile PRIMARY KEY (id);


--
-- Name: user pk_user; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_user PRIMARY KEY (id);


--
-- Name: user_role pk_user_role; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT pk_user_role PRIMARY KEY (id);


--
-- Name: videogame pk_videogame; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT pk_videogame PRIMARY KEY (id);


--
-- Name: videogame_gender pk_videogame_gender; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT pk_videogame_gender PRIMARY KEY (id);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: address update_user_task_updated_on; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_task_updated_on BEFORE UPDATE ON public.address FOR EACH ROW EXECUTE FUNCTION public.update_updated_on_user_task();


--
-- Name: console update_user_task_updated_on; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_task_updated_on BEFORE UPDATE ON public.console FOR EACH ROW EXECUTE FUNCTION public.update_updated_on_user_task();


--
-- Name: periferic update_user_task_updated_on; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_task_updated_on BEFORE UPDATE ON public.periferic FOR EACH ROW EXECUTE FUNCTION public.update_updated_on_user_task();


--
-- Name: profile update_user_task_updated_on; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_task_updated_on BEFORE UPDATE ON public.profile FOR EACH ROW EXECUTE FUNCTION public.update_updated_on_user_task();


--
-- Name: user update_user_task_updated_on; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_task_updated_on BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.update_updated_on_user_task();


--
-- Name: videogame update_user_task_updated_on; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_task_updated_on BEFORE UPDATE ON public.videogame FOR EACH ROW EXECUTE FUNCTION public.update_updated_on_user_task();


--
-- Name: address fk_address_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT fk_address_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: console fk_console_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT fk_console_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: console fk_console_has_name_dict; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT fk_console_has_name_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- Name: videogame_gender fk_gender_belongs_videogame; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT fk_gender_belongs_videogame FOREIGN KEY (gender_id) REFERENCES public.gender(id);


--
-- Name: periferic fk_periferic_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT fk_periferic_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: periferic fk_periferic_name_console_dict; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT fk_periferic_name_console_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- Name: profile fk_profile_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT fk_profile_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;


--
-- Name: user fk_user_has_role; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_user_has_role FOREIGN KEY (user_role_id) REFERENCES public.user_role(id);


--
-- Name: videogame fk_videogame_belongs_console_dict; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT fk_videogame_belongs_console_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- Name: videogame fk_videogame_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT fk_videogame_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: videogame_gender fk_videogame_has_gender; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT fk_videogame_has_gender FOREIGN KEY (videogame_id) REFERENCES public.videogame(id);

--Populate catalog table console dictionary
INSERT INTO public.console_dictionary (name, type) VALUES
('generic', 'generic'),
('playstation', 'desktop'),
('playstation 2', 'desktop'),
('playstation 3', 'desktop'),
('playstation 4', 'desktop'),
('playstation 5', 'desktop'),
('psp', 'portable'),
('psp go', 'portable'),
('ps vita', 'portable'),
('xbox', 'desktop'),
('xbox 360', 'desktop'),
('xbox one', 'desktop'),
('xbox series x', 'desktop'),
('xbox series s', 'desktop'),
('nintendo entertainment system', 'desktop'),
('super nintendo', 'desktop'),
('virtual boy', 'desktop'),
('nintendo 64', 'desktop'),
('gamecube', 'desktop'),
('wii', 'desktop'),
('wii u', 'desktop'),
('nintendo switch', 'desktop'),
('nintendo switch lite', 'portable'),
('game boy', 'portable'),
('game boy color', 'portable'),
('game boy advance', 'portable'),
('game boy advance sp', 'portable'),
('nintendo ds', 'portable'),
('nintendo 3ds', 'portable'),
('new nintendo 3ds', 'portable'),
('game & watch', 'portable'),
('sega master system', 'desktop'),
('sega genesis', 'desktop'),
('sega saturn', 'desktop'),
('sega dreamcast', 'desktop'),
('sega cd', 'desktop'),
('game gear', 'portable'),
('genesis nomad', 'portable'),
('pc', 'desktop');

--Populate catalog table gender
INSERT INTO public.gender (name) VALUES
('action'),
('adventure'),
('rpg'),
('fps'),
('sports'),
('simulation'),
('strategy'),
('horror'),
('mmorpg'),
('fighting'),
('puzzle'),
('racing'),
('sandbox'),
('music/rhythm'),
('platformer'),
('survival'),
('stealth');

--Populate catalog table user_role
INSERT INTO public.user_role (role) VALUES
('admin'),
('client');
--
-- PostgreSQL database dump complete
--

