PGDMP                         {         	   producsDB    11.20    11.20                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16393 	   producsDB    DATABASE     �   CREATE DATABASE "producsDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "producsDB";
             postgres    false            �            1259    16424 
   categories    TABLE     |   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text
);
    DROP TABLE public.categories;
       public         postgres    false            �            1259    16422    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public       postgres    false    197                       0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
            public       postgres    false    196            �            1259    16453    products    TABLE     
  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    value numeric(10,2) NOT NULL,
    expire_date date,
    amount_stock integer NOT NULL,
    perishables boolean NOT NULL,
    categorie_id integer,
    imgs text
);
    DROP TABLE public.products;
       public         postgres    false            �            1259    16451    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public       postgres    false    199                       0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
            public       postgres    false    198            �
           2604    16427    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197            �
           2604    16456    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199                      0    16424 
   categories 
   TABLE DATA               ;   COPY public.categories (id, name, description) FROM stdin;
    public       postgres    false    197                    0    16453    products 
   TABLE DATA               o   COPY public.products (id, name, value, expire_date, amount_stock, perishables, categorie_id, imgs) FROM stdin;
    public       postgres    false    199   �                  0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 4, true);
            public       postgres    false    196                       0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 37, true);
            public       postgres    false    198            �
           2606    16432    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public         postgres    false    197            �
           2606    16458    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public         postgres    false    199            �
           2606    16459 #   products products_categorie_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_categorie_id_fkey FOREIGN KEY (categorie_id) REFERENCES public.categories(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT products_categorie_id_fkey;
       public       postgres    false    199    197    2696               �   x�]���0E�����7��%r��*v�2WG�b�����w�;���I��78�D^G1��E܃$a/�V�K�8��Q�_M�\8kZ���� �� U'��S�g���[*q#jC��\7��C�ަA�         �  x�u��n�8���|�;jIQ'0
�I�n�ćE���lŒ�PTT���d��6X@"G$!~��3݉
���9��0�1���E�s��zy��Je����iy0{��'u�EC�$�"N 6an���f�e��5ދ�{5�O�$��x/�	�<L|r)',����Eu�<n��ŶTf�u�tY�o���R�����C3�|�m#v�#�O��d�J�h�R�om�o�'KXNK���3X�ک��GkJ-�"�)��}.��9e��4�	�#���!}b�Q�f�Ύ=�>aS2P9�~�R��G�T�]Zo�8�
�S�
�k>�M`�j���\�?�u�]�}][kx��V�&��znS�&���c�/���xDC���j���Gļ$>�J�?���d)�rȵΚ3���Amzs��Z�z}f��$�p+�\I�|��8�AJ�e̱�y�X���ǃ��%<&A�D����j�x�E���HYo��u]��D�����8������n�ō��Aa��eh�/֦Ȕ�D����38�Q��V�6����Z7��ؕ�3�o�bg�J]���������|�����f���|?��כe�|�	��Bًi�t%�@�s~�%�XGB�	���"���$gRf<KC��\�a$x��qe���Q �%�x�u*5�Q<�\��\���ȩ�Ä�A�����=�'��b�A.(	|."��\�Ȯ���'4Oj�x���_�nd�     