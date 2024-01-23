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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: public; Owner: neto
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


ALTER TABLE public.address OWNER TO neto;

--
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.address_id_seq OWNER TO neto;

--
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- Name: console; Type: TABLE; Schema: public; Owner: neto
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


ALTER TABLE public.console OWNER TO neto;

--
-- Name: console_dictionary; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.console_dictionary (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(100) NOT NULL
);


ALTER TABLE public.console_dictionary OWNER TO neto;

--
-- Name: console_dictionary_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.console_dictionary_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.console_dictionary_id_seq OWNER TO neto;

--
-- Name: console_dictionary_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.console_dictionary_id_seq OWNED BY public.console_dictionary.id;


--
-- Name: console_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.console_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.console_id_seq OWNER TO neto;

--
-- Name: console_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.console_id_seq OWNED BY public.console.id;


--
-- Name: gender; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.gender (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.gender OWNER TO neto;

--
-- Name: gender_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gender_id_seq OWNER TO neto;

--
-- Name: gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;


--
-- Name: periferic; Type: TABLE; Schema: public; Owner: neto
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


ALTER TABLE public.periferic OWNER TO neto;

--
-- Name: periferic_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.periferic_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.periferic_id_seq OWNER TO neto;

--
-- Name: periferic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.periferic_id_seq OWNED BY public.periferic.id;


--
-- Name: profile; Type: TABLE; Schema: public; Owner: neto
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


ALTER TABLE public.profile OWNER TO neto;

--
-- Name: profile_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profile_id_seq OWNER TO neto;

--
-- Name: profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.profile_id_seq OWNED BY public.profile.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    user_role_id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(50) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."user" OWNER TO neto;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO neto;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: user_role; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.user_role (
    id integer NOT NULL,
    role character varying(50) NOT NULL
);


ALTER TABLE public.user_role OWNER TO neto;

--
-- Name: user_role_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.user_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_role_id_seq OWNER TO neto;

--
-- Name: user_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.user_role_id_seq OWNED BY public.user_role.id;


--
-- Name: videogame; Type: TABLE; Schema: public; Owner: neto
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


ALTER TABLE public.videogame OWNER TO neto;

--
-- Name: videogame_gender; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.videogame_gender (
    id integer NOT NULL,
    videogame_id integer NOT NULL,
    gender_id integer NOT NULL
);


ALTER TABLE public.videogame_gender OWNER TO neto;

--
-- Name: videogame_gender_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.videogame_gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.videogame_gender_id_seq OWNER TO neto;

--
-- Name: videogame_gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.videogame_gender_id_seq OWNED BY public.videogame_gender.id;


--
-- Name: videogame_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.videogame_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.videogame_id_seq OWNER TO neto;

--
-- Name: videogame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.videogame_id_seq OWNED BY public.videogame.id;


--
-- Name: address id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- Name: console id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console ALTER COLUMN id SET DEFAULT nextval('public.console_id_seq'::regclass);


--
-- Name: console_dictionary id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console_dictionary ALTER COLUMN id SET DEFAULT nextval('public.console_dictionary_id_seq'::regclass);


--
-- Name: gender id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);


--
-- Name: periferic id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic ALTER COLUMN id SET DEFAULT nextval('public.periferic_id_seq'::regclass);


--
-- Name: profile id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.profile ALTER COLUMN id SET DEFAULT nextval('public.profile_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: user_role id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.user_role ALTER COLUMN id SET DEFAULT nextval('public.user_role_id_seq'::regclass);


--
-- Name: videogame id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame ALTER COLUMN id SET DEFAULT nextval('public.videogame_id_seq'::regclass);


--
-- Name: videogame_gender id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender ALTER COLUMN id SET DEFAULT nextval('public.videogame_gender_id_seq'::regclass);


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.address (id, user_id, country, state, street, zip_code, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: console; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.console (id, console_dict_id, user_id, is_used, is_sold, price, image, description, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: console_dictionary; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.console_dictionary (id, name, type) FROM stdin;
1	playstation	desktop
2	playstation 2	desktop
3	playstation 3	desktop
4	playstation 4	desktop
5	playstation 5	desktop
6	psp	portable
7	psp go	portable
8	ps vita	portable
9	xbox	desktop
10	xbox 360	desktop
11	xbox one	desktop
12	xbox series x	desktop
13	xbox series s	desktop
14	xbox portable	portable
15	nintendo entertainment system	desktop
16	super nintendo	desktop
17	virtual boy	desktop
18	nintendo 64	desktop
19	gamecube	desktop
20	wii	desktop
21	wii u	desktop
22	nintendo switch	desktop
23	nintendo switch lite	portable
24	game boy	portable
25	game boy color	portable
26	game boy advance	portable
27	game boy advance sp	portable
28	nintendo ds	portable
29	nintendo 3ds	portable
30	new nintendo 3ds	portable
31	game & watch	portable
32	sega master system	desktop
33	sega genesis	desktop
34	sega saturn	desktop
35	sega dreamcast	desktop
36	sega cd	desktop
37	game gear	portable
38	genesis nomad	portable
39	pc	desktop
40	generic	generic
\.


--
-- Data for Name: gender; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.gender (id, name) FROM stdin;
1	action
2	adventure
3	rpg
4	fps
5	sports
6	simulation
7	strategy
8	horror
9	mmorpg
10	fighting
11	puzzle
12	racing
13	sandbox
14	music/rhythm
15	platformer
16	survival
17	stealth
\.


--
-- Data for Name: periferic; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.periferic (id, user_id, console_dict_id, name, is_used, is_sold, price, image, description, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.profile (id, user_id, name, lastname, date_birth, profile_pic, contact_email, contact_number, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public."user" (id, user_role_id, email, password, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: user_role; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.user_role (id, role) FROM stdin;
1	admin
2	client
\.


--
-- Data for Name: videogame; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.videogame (id, console_dict_id, user_id, name, is_used, is_sold, image, description, price, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: videogame_gender; Type: TABLE DATA; Schema: public; Owner: neto
--

COPY public.videogame_gender (id, videogame_id, gender_id) FROM stdin;
\.


--
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.address_id_seq', 1, false);


--
-- Name: console_dictionary_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.console_dictionary_id_seq', 40, true);


--
-- Name: console_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.console_id_seq', 1, false);


--
-- Name: gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.gender_id_seq', 17, true);


--
-- Name: periferic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.periferic_id_seq', 1, false);


--
-- Name: profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.profile_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.user_id_seq', 1, false);


--
-- Name: user_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.user_role_id_seq', 2, true);


--
-- Name: videogame_gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.videogame_gender_id_seq', 1, false);


--
-- Name: videogame_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neto
--

SELECT pg_catalog.setval('public.videogame_id_seq', 1, false);


--
-- Name: address pk_address; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT pk_address PRIMARY KEY (id);


--
-- Name: console pk_console; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT pk_console PRIMARY KEY (id);


--
-- Name: console_dictionary pk_console_dict; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console_dictionary
    ADD CONSTRAINT pk_console_dict PRIMARY KEY (id);


--
-- Name: gender pk_gender; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT pk_gender PRIMARY KEY (id);


--
-- Name: periferic pk_periferic; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT pk_periferic PRIMARY KEY (id);


--
-- Name: profile pk_profile; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT pk_profile PRIMARY KEY (id);


--
-- Name: user pk_user; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_user PRIMARY KEY (id);


--
-- Name: user_role pk_user_role; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT pk_user_role PRIMARY KEY (id);


--
-- Name: videogame pk_videogame; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT pk_videogame PRIMARY KEY (id);


--
-- Name: videogame_gender pk_videogame_gender; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT pk_videogame_gender PRIMARY KEY (id);


--
-- Name: address fk_address_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT fk_address_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: console fk_console_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT fk_console_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: console fk_console_has_name_dict; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT fk_console_has_name_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- Name: videogame_gender fk_gender_belongs_videogame; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT fk_gender_belongs_videogame FOREIGN KEY (gender_id) REFERENCES public.gender(id);


--
-- Name: periferic fk_periferic_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT fk_periferic_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: periferic fk_periferic_name_console_dict; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT fk_periferic_name_console_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- Name: profile fk_profile_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT fk_profile_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;


--
-- Name: user fk_user_has_role; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_user_has_role FOREIGN KEY (user_role_id) REFERENCES public.user_role(id);


--
-- Name: videogame fk_videogame_belongs_console_dict; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT fk_videogame_belongs_console_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- Name: videogame fk_videogame_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT fk_videogame_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: videogame_gender fk_videogame_has_gender; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT fk_videogame_has_gender FOREIGN KEY (videogame_id) REFERENCES public.videogame(id);


--
-- PostgreSQL database dump complete
--

